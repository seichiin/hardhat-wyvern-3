const { ethers } = require("hardhat");
const { expect } = require("chai");
const {
  keccak256,
  defaultAbiCoder,
  toUtf8Bytes,
  solidityPack,
} = require("ethers/lib/utils");

function encodeType(name, fields) {
  let result = `${name}(${fields
    .map(({ name, type }) => `${type} ${name}`)
    .join(",")})`;
  return result;
}

function typeHash(name, fields) {
  return keccak256(toUtf8Bytes(encodeType(name, fields)));
}

function encodeData(name, fields, data) {
  let encTypes = [];
  let encValues = [];

  // Add typehash
  encTypes.push("bytes32");
  encValues.push(typeHash(name, fields));

  // Add field contents
  for (let field of fields) {
    let value = data[field.name];
    if (field.type === "string" || field.type === "bytes") {
      encTypes.push("bytes32");
      value = keccak256(toUtf8Bytes(value));
      encValues.push(value);
    } else {
      encTypes.push(field.type);
      encValues.push(value);
    }
  }

  return defaultAbiCoder.encode(encTypes, encValues);
}

function structHash(name, fields, data) {
  return keccak256(encodeData(name, fields, data));
}

const eip712Domain = {
  name: "EIP712Domain",
  fields: [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" },
  ],
};

function signHash(typedData) {
  return keccak256(
    solidityPack(
      ["string", "bytes32", "bytes32"],
      [
        "\x19\x01",
        structHash(eip712Domain.name, eip712Domain.fields, typedData.domain),
        structHash(typedData.name, typedData.fields, typedData.data),
      ]
    )
  );
}

describe("EIP-712", function () {
  it("correctly encodes the type", async function () {
    const type = encodeType("Mail", [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ]);
    expect(type).to.equal("Mail(Person from,Person to,string contents)");
  });

  it("correctly hashes the type", async function () {
    const hash = typeHash("Mail", [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ]);
    expect(hash).to.equal(
      keccak256(toUtf8Bytes("Mail(Person from,Person to,string contents)"))
    );
  });
});

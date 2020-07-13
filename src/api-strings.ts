const windowName = "windowName";
const requestId = "requestId";
const plaintext = "plaintext";
const command = "command";
const respondTo = "respondTo";
const authToken = "authToken";
const password = "password";
//const passwordWithDerivationOptionsJson = "passwordWithDerivationOptionsJson";
const derivationOptionsJson = "derivationOptionsJson";
const packagedSealedMessage = "packagedSealedMessage";
const exception = "exception";
const message = "message";
const stack = "stack";
const signature = "signature";
const sealingKey = "sealingKey";
const secret = "secret";
const signingKey = "signingKey";
const symmetricKey = "symmetricKey";
const unsealingKey = "unsealingKey";
const signatureVerificationKey = "signatureVerificationKey";
const wordLimit = "wordLimit";


export const Commands = (() => {
  const generateSignature = "generateSignature";
  const getPassword = "getPassword";
  const getSealingKey = "getSealingKey";
  const getSecret = "getSecret";
  const getSignatureVerificationKey = "getSignatureVerificationKey";
  const getSigningKey = "getSigningKey";
  const getSymmetricKey = "getSymmetricKey";
  const getUnsealingKey = "getUnsealingKey";
  const sealWithSymmetricKey = "sealWithSymmetricKey";
  const unsealWithSymmetricKey = "unsealWithSymmetricKey";
  const unsealWithUnsealingKey = "unsealWithUnsealingKey";
  return {
    generateSignature,
    getPassword,
    getSealingKey,
    getSecret,
    getSignatureVerificationKey,
    getSigningKey,
    getSymmetricKey,
    getUnsealingKey,
    sealWithSymmetricKey,
    unsealWithSymmetricKey,
    unsealWithUnsealingKey,
   } as const;
})();
export const MetaCommands = (() => {
  const getAuthToken = "getAuthToken";
  return {
    getAuthToken,
   } as const;
})();

export type Command = keyof typeof Commands;
export type MetaCommand = keyof typeof MetaCommands;
export const isCommand = (str: string | undefined): str is Command =>
  str != null && str in Commands;
export const isMetaCommand = (str: string | undefined): str is MetaCommand =>
  str != null && str in MetaCommands;

const withDerivationOptions = {
  derivationOptionsJson
} as const;

const getObject = {
  ...withDerivationOptions
} as const;

const getPassword = {
  ...getObject,
  wordLimit,
} as const;

const unsealingInstructions = "unsealingInstructions";
const unsealInput = {
  packagedSealedMessage
} as const;


export const Inputs = {
  COMMON: {
    // For tracking requests, but invisible to command-handling code
    requestId,
    command,
    // For message-based API
    windowName,
    // For URL-based API
    respondTo,
    authToken,
  } as const,

  withDerivationOptions,

  // For URL-based APIs, the command name and the https uri to respond to
  generateSignature: {
    ...withDerivationOptions,
    message: "message"
  } as const,

  getPassword,
  getSealingKey: getObject,
  getSecret: getObject,
  getSignatureVerificationKey: getObject,
  getSigningKey: getObject,
  getSymmetricKey: getObject,
  getUnsealingKey: getObject,

  sealWithSymmetricKey: {
    ...withDerivationOptions,
    plaintext,
    unsealingInstructions
  } as const,

  unsealWithSymmetricKey: {...unsealInput} as const,
  unsealWithUnsealingKey: {...unsealInput} as const,

}

export const Outputs = {
  COMMON: {
    requestId,
    exception,
    message,
    stack
  } as const,

  generateSignature: {
    signature,
    signatureVerificationKey
  } as const,

  getAuthToken: {
    authToken
  } as const,

  getPassword: {
    derivationOptionsJson,
    password
//    passwordWithDerivationOptionsJson
  } as const,

  getSealingKey: {
    sealingKey
  } as const,

  getSecret: {
    secret
  } as const,

  getSignatureVerificationKey: {
    signatureVerificationKey
  } as const,

  getSigningKey: {
    signingKey
  } as const,

  getSymmetricKey: {
    symmetricKey
  } as const,

  getUnsealingKey: {
    unsealingKey
  } as const,

  sealWithSymmetricKey: {
    packagedSealedMessage
  } as const,

  unsealWithSymmetricKey: {
    plaintext
  } as const,

  unsealWithUnsealingKey: {
    plaintext
  } as const,
}


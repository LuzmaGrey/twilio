import "dotenv/config";
export default {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: process.env.MONGOPASS,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "ecommerce-294e5",
    private_key_id: "9a267b413b619fff2300b10fe2716c57c4eb22a2",
    private_key: process.env.FBKEY
      ? process.env.FBKEY.replace(/\\n/g, "\n")
      : undefined,
    client_email:
      "firebase-adminsdk-2etbx@pokecommerce-294e5.iam.gserviceaccount.com",
    client_id: "106454941312398153702",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2etbx%40pokecommerce-294e5.iam.gserviceaccount.com",
  },
};

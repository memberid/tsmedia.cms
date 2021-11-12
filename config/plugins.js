module.exports = ({ env }) => ({
  upload: {
    provider: "imagekit",
    providerOptions: {
      publicKey: "public_O9WIbxN294pMTg2eyEWiR7rL6QE= ",
      privateKey: "private_ms/4L2FS/10IOOMgq8motEvMsVA=",
      urlEndpoint: "https://ik.imagekit.io/tsmedia",
      // Optional
      params: {
        // Defaults to "/" if value is not supplied
        folder: "/production/images"
      }
    }
  }
});
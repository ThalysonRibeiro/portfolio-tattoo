export async function getDataHome() {
  try {
    const response = await fetch(`${process.env.MEXT_PUBLICAPI_URL}/objects/67c91b778ff3e1d733162e52?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata,type`);
    if (!response.ok) {
      throw new Error("Failed to ftch data")
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to ftch data \n" + error)
  }
}
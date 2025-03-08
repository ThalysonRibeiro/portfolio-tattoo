export async function getDataHome() {
  try {
    const response = await fetch(`${process.env.MEXT_PUBLIC_API_URL}/objects/67c91b778ff3e1d733162e52?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`, { next: { revalidate: 120 } });
    if (!response.ok) {
      throw new Error("Failed to ftch data")
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data \n" + error)
  }
}

export async function getDataGalery() {
  try {
    const response = await fetch(`${process.env.MEXT_PUBLIC_API_URL}/objects/67cb627f8ff3e1d733163205?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`, { next: { revalidate: 120 } });
    if (!response.ok) {
      throw new Error("Failed to ftch data")
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data \n" + error)
  }
}


export async function getDataPosts() {
  try {
    const response = await fetch(`${process.env.MEXT_PUBLIC_API_URL}/objects/67cb91db8ff3e1d733163255?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`, { next: { revalidate: 120 } });
    if (!response.ok) {
      throw new Error("Failed to ftch data")
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data \n" + error)
  }
}
import axios from "axios";
import { ENDPOINTS } from "../endpoints";
import { appendToFormData } from "../../utils/helpers";

export const createProfile = async (profile) => {
  const formData = appendToFormData(profile);

  try {
    const response = await axios.post(ENDPOINTS.CREATEPROFILE, formData);
    return response.data.profile;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "Ett fel inträffade vid skapandet av profil");
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Ett oväntat fel inträffade");
    }
  }
};

export const editProfile = async (profile) => {
  const formData = appendToFormData(profile);

  try {
    const response = await axios.put(ENDPOINTS.EDITPROFILE, formData);
    return response.data.profile;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Ett fel inträffade vid redigering av profil"
      );
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Ett oväntat fel inträffade");
    }
  }
};

export const getProfile = async () => {
  try {
    const response = await axios.get(ENDPOINTS.GETPROFILE);
    return response.data.profile;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "Ett fel inträffade vid hämtning av profil");
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Ett oväntat fel inträffade");
    }
  }
};

export const getProfileAlis = async () => {
  try {
    const response = await axios.get(ENDPOINTS.GETPROFILEALIAS);
    return response.data.profileAlias;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Ett fel inträffade vid hämtning av profiler"
      );
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Ett oväntat fel inträffade");
    }
  }
};

import { Configuration, OpenAIApi } from "openai";

export const API_KEY = import.meta.env.VITE_OPENAI_KEY
export const API_ORGANIZATION = "org-CchWzZMfAU37caEG7DHUF1b1"

export function request_image(p, setImage, setLoading) {
    const configuration = new Configuration({
        apiKey: API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      openai.createImage({
        prompt: p,
        n: 1,
        size: "1024x1024",
      }).then((response) => {
        console.log(response.data)
        setImage(response.data)
        setLoading(false)
      })
}
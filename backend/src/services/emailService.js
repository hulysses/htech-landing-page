import axios from "axios";
import { cloudFunctionUrl } from './config.js';
import { cloudToken } from './config.js'

export async function sendEmail(toMail, content) {
    const response = await axios.post(
        cloudFunctionUrl,
        { toMail, content },
        {
            headers: {
                'Authorization': `Bearer ${cloudToken}`
            }
        }
    );
    return { status: response.status, data: response.data };
}
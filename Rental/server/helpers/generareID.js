import crypto from "crypto"
export const generateId = () => {
    return crypto.randomBytes(12)
        .toString('hex'); 
}

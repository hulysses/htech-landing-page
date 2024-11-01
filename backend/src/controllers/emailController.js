const emailService = require('../services/emailService');

export async function sendEmail(req, res) {
    const { toMail, content } = req.body;
    try {
        const result = await emailService.sendEmail(toMail, content);
        return res.status(result.status).json(result.data);
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return res.status(500).json({ success: false, message: 'Erro ao enviar o email.' });
    }
};

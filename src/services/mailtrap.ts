import { MailtrapClient } from "mailtrap"

export const mailtrapClient = new MailtrapClient({ token: import.meta.env.MAILTRAP_TOKEN });
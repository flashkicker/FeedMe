import validator from 'validator'

export default recipients => {
	const invalidRecipients = recipients
		.split(" ")
		.join("")
        .split(",")
        .filter((recipient) => {
            return validator.isEmail(recipient) === false
        })

    if (invalidRecipients.length) {
        return `These emails are invalid: ${invalidRecipients}`
    }

    return
}

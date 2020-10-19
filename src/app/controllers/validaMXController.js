const { Resolver } = require('dns');
const Yup = require("yup");

module.exports = {
    async index(req, res) {
        try {

            const schema = Yup.object().shape({
                email: Yup.string().email().required()
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ data: "Dados inválidos" })
            }
            
            //const email = 'diego@naoexiste.com.br';
            const { email } = req.body;
            const domain = email.split('@')[1]; 
            const resolver = new Resolver();

            resolver.resolve(domain, 'MX', function(err, addresses) {    
                if (err) {
                    console.log('No MX record exists, so email is invalid.'); 
                    return res.status(200).json({ domain : 'invalid' })
               } else if (addresses && addresses.length > 0) {      
                   console.log('This MX records exists So I will accept this email as valid.');
                   return res.status(200).json({ domain : 'valid' })
               }
           });
        }catch(error){
            console.log('Error: ' + error);
        }
    }
}
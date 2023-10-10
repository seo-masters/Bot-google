import OpenWeb from "../services/BotScraping.js";

const getInfPaymet = async (req,res)=>{
    const {seach }=req.body;
    console.log(seach)
    if (seach === undefined  ) {
        res.status(204).json({
            "Title":"Bot Azteska",
            "statup":"204",
            "error":"Busqueda en Blanco"

        })
    }else{

       const resul= await OpenWeb(seach);
        // res.send(`<h1>Hello desde ${req.baseUrl}</h1>`);
        res.status(200).json({
            "Title":"Bot Azteska",
            "statup":"200",
            resul
        });
    }

}


export default {
    getInfPaymet
}
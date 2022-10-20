import Characters from "../models/CharactersModel";
import Movies from "../models/MoviesModel";

export const getCharacters = async (req, res) => {
    const { name, age, movies } = req.query
    try {
        if (name != undefined) {
            const resp = await Characters.findAll({
                where: { Name: name },
            });
            res.status(200).json(resp)
        } else if (age != undefined) {
            const resp = await Characters.findAll({
                where: { Age: age },
            });
            res.status(200).json(resp)
        } else if (movies != undefined) {
            const resp = await Characters.findAll({
                include:
                {
                    model: Movies, where: {
                        ID: movies
                    }
                }
            });
            res.status(200).json(resp)
        } else {
            const resp = await Characters.findAll({
                where: { ID: movies },
            });
            res.status(200).json(resp)
        }
    } catch (error) {
        res.status(404).json({
            msg: "No hay actor disponible",
        });
    }
};

export const postCharacters = async (req, res) => {
    const { Age, Img, History, Weight, Name } = req.body;

    try {
        const insert = new Characters({
            Age: Age,
            Img: Img,
            History: History,
            Weight: Weight,
            Name: Name,
        });
        await insert.save();
        res.status(200).json({ msg: "insert successfully" });
    } catch (error) {
        res.status(500).json({ msg: error });

    }
};

export const putCharacters = async (req, res) => {
    const { id } = req.params
    const { Age, Img, History, Weight, Name } = req.body;

    try {
        const result = await Characters.findByPk(id)
        if (result) {
            await result.update({
                Age: Age,
                Img: Img,
                History: History,
                Weight: Weight,
                Name: Name,
                ID: id,
            })
            res.status(200).json({ "msg": result })
        } else {
            return res.status(404).json({ "msg": "Not have character for id" })
        }
    } catch (error) {
        res.status(500).json({ "msg": "No hay usuario" })
    }

};

export const deleteCharacters = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Characters.findByPk(id)
        if (result) {
            await result.destroy()
            return res.status(200).json({ "msg": "Personaje eliminado correctamente" })
        } else {
            return res.status(404).json({ "msg": "no hay personaje con ese id" })
        }
    } catch (error) {
        res.status(500).json({ "msg": "No hay usuario" })
    }
};

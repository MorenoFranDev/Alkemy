import Movies from "../models/MoviesModel";

export const getMovies = async (request, response) => {
    const { name, genre, order } = request.query;

    try {
        if (name != undefined) {
            const resp = await Movies.findAll({
                where: { Title: name },
            });
            response.status(200).json(resp);
        } else if (genre != undefined) {
            const resp = await Movies.findAll({
                where: { GenderID: genre },
            });
            response.status(200).json(resp);
        } else if (order != undefined) {
            console.log(order)
            const resp = await Movies.findAll({
                order: [['ID', order]]
            });
            response.status(200).json(resp);
        } else {
            const resp = await Movies.findAll({});
            response.status(200).json(resp);
        }
    } catch (error) {
        response.status(404).json({
            "msg": "Not have movies",
        });
    }
};

export const postMovies = async (req, res) => {
    const { Img, Title, Creation, Qualificacion, GenderID, TypeID } = req.body;
    try {
        const result = Movies.create({
            Img: Img,
            Title: Title,
            Creation: Creation,
            Qualificacion: Qualificacion,
            GenderID: GenderID,
            TypeID: TypeID,
        });
        await result.save()
        res.status(200).json({ "msg": "Insert successfully" })
    } catch (error) {
        res.status(500).json({ "msg": error });
    }

};

export const putMovies = async (req, res) => {
    const { id } = req.params
    const { Img, Title, Creation, Qualificacion, GenderID, TypeID } = req.body
    try {
        const result = await Movies.findByPk(id)
        if (result) {
            await result.update({
                Img: Img,
                Title: Title,
                Creation: Creation,
                Qualificacion: Qualificacion,
                ID: id,
                GenderID: GenderID,
                TypeID: TypeID,
            })
            res.status(200).json({ "msg": "save successfully" })
        } else {
            res.status(404).json({ "msg": "Not have element for id" })

        }
    } catch (error) {
        res.status(500).json({ "msg": "Internal server error" });
    }
};

export const deleteMovies = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Movies.findByPk(id);
        if (!result) return res.status(404).json({ "msg": "Not have movie for id: ", id })
        await result.destroy()
        res.status(200).json({ "msg": "delete successfully" });
    } catch (error) {
        res.status(500).json({ "msg": error });
    }
};

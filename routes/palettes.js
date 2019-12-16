var express = require('express');
var router = express.Router();
const Palette = require('../models').Palette;

// GET one color palette
router.get('/:id', (req, res) => {
    Palette.findByPk(req.params.id)
        .then(thePalette => {
            res.json({ thePalette })
        })
        .catch(error => {
            res.json({ message: error })
        })
})

// GET all schemes owned by one user
router.get('/user/:userId', (req, res) => {
    Palette.findAll({ where: { userId: req.params.userId } })
        .then(palettes => {
            res.json({ palettes })
        })
        .catch(error => {
            res.json({ message: error })
        })
})

// POST create a palette
router.post('/', (req, res) => {
    Palette.create({ colrOrgId: req.body.colrOrgId, notes: req.body.notes, 
        paletteName: req.body.paletteName, userId: req.body.userId, 
        color0: req.body.color0, color1: req.body.color1, color2: req.body.color2,
        color3: req.body.color3, color4: req.body.color4, color5: req.body.color5,
        color6: req.body.color6, color7: req.body.color7, color8: req.body.color8,
        color9: req.body.color9, color10: req.body.color10, })
        .then(newPalette => {
            res.json({ newPalette })
        })
        .catch(error => {
            res.json({ message: error })
        })
})
 
// DELETE a palette
router.delete('/:id', (req, res) => {
    Palette.destroy({ where: { id: req.params.id } })
        .then((deletedPalette) => {
            res.send(`deleted palette of id: ${req.params.id}`)
            // res.sendStatus( deletedPalette )
        })
        .catch(error => {
            res.json({ message: error })
        })
})

// PUT Update a Post
// send body JSON for only those that are updating
// no further code needed in route
router.put('/:id', (req, res) => {
    Palette.update(req.body, {
        where: { id: req.params.id }
    })
        .then(messageItems => {
            res.json({ messageItems })
        })
})

// load scheme by id from colr.org is handled in just axios
// or check to see if saved and load from db if so first

// when a color is edited scratch colrOrgId from this.state

module.exports = router;
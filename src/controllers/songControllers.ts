import * as mongoose from 'mongoose';
import { SongSchema } from '../models/songModel';
import { Request, Response } from 'express';

const Song = mongoose.model('Song', SongSchema);

export class SongController {
    public getAllSongs(req: Request, res: Response) {
        Song.find({}, (err, songs) => {
            if (err) res.send(err);
            res.json(songs);
        });
    };

    public getSingleSong(req: Request, res: Response) {
        Song.findById(req.params.id, (err, song) => {
            if (err) res.send(err);
            res.json(song);
        });
    };

    public addNewSong(req: Request, res: Response) {
        let newSong = new Song(req.body);
        newSong.save((err, song) => {
            if (err) res.send(err);
            res.json(song);
        });
    };

    public editSong(req: Request, res: Response) {
        Song.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, song) => {
            if (err) res.send(err);
            res.json(song);
        });
    };

    public deleteSong(req: Request, res: Response) {
        Song.remove({ _id: req.params.id }, (err, song) => {
            if (err) res.send(err);
            res.json({ messgae: 'Successfully deleted' });
        });
    };
};
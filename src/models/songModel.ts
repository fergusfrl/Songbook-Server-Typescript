import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SongSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a Song Title'
    },
    artist: { type: String },
    album: { type: String },
    lyrics: {
        type: String,
        required: 'Enter some Lyrics'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
import { SongController } from '../controllers/songControllers';

export class Routes {
    public songController: SongController = new SongController();

    public routes(app): void {
        app.route('/')
            .get(this.songController.getAllSongs)
            .post(this.songController.addNewSong);

        app.route('/:id')
            .get(this.songController.getSingleSong)
            .put(this.songController.editSong)
            .delete(this.songController.deleteSong);
    };
};
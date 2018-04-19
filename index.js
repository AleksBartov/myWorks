const mongoose = require('mongoose');

mongoose.connect('mongodb://AleksBartov:Merahba2018@ds247439.mlab.com:47439/aleksbartovworks')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(() => console.log('Could not connected to MongoDB...', err));

const workSchema = new mongoose.Schema({
    title: String,
    url: String,
    description: String
});

const Work = mongoose.model('Work', workSchema);

async function createWork() {
    const result = await Work.create({
        title: 'Личный блог Елизаветы Бартовой',
        url: 'elizavetabartova.ru',
        description: 'личная страница многодетной мамы для публикаций фото, статей'
    });
    result.save();
    console.log(result);
}

createWork();
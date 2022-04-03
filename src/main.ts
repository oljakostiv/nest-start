import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule); //add module;

    //add swagger:
    const config = new DocumentBuilder()
        .setTitle('Horse Exhibition')
        .setDescription('REST API documentation')
        .setVersion('1.0.0')
        .addTag('Olha Kostiv')
        .build()
    const doc = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, doc);  //open here;

    await app.listen(PORT, () => console.log(`Port: ${PORT}`));
}

start();

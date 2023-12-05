import { Complex } from "src/entities/complex.entities";
import { User } from "src/entities/user.entities";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'testDB',
    host: 'localhost',
    port: 5431,
    username: 'postgres',
    password: 'postgres',
    entities: [User,Complex],
    synchronize: true,
}

export default config 
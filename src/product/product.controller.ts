import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { DRESSER, PARTITION, barCounter, crockeryUnit, pooja, shoeRack, studyTable, tvUnit, wallPanel, wordrobe } from 'src/database/dummy';

@Controller('product')
export class ProductController {
    constructor(){}

    @Post('/getProductByType')
    async getProductByType (@Body() req: {body:{ type: string }}, @Res() res) {
        console.log(req.body.type, "req.type");
        let productList;
        switch (req.body.type) {
            case 'pooja':
                productList = pooja;
                break;
            case 'shoe_rack':
                productList = shoeRack;
                break;
            case 'crockery_unit':
                productList = crockeryUnit;
                break;
            case 'dresser':
                productList = DRESSER;
                break;
            case 'partition':
                productList = PARTITION;
                break;
            case 'study_table':
                productList = studyTable;
                break;
            case 'bar_counter':
                productList = barCounter;
                break;
            case 'tv_unit':
                productList = tvUnit;
                break;
            case 'wardrobe':
                productList = wordrobe;
                break;
            case 'wall_panel':
                productList = wallPanel;
                break;
            default:
                productList = [];
                break;
        }

        res.send(productList);
    }
}
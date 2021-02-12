import { ChamadoInterface } from "../interfaces/chamado.interface";

export class ChamadoModel implements ChamadoInterface{

    name!: string;
    uid!: string;

    constructor(obj: any = null) {
		Object.assign(this, obj);
	}
}
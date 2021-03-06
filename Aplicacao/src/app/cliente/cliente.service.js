"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alerta_1 = require("../alerta/alerta");
var webservice_1 = require("../helpers/webservice");
var ClienteService = (function () {
    function ClienteService(webservice) {
        this.webservice = webservice;
    }
    ClienteService.prototype.salvar = function (cliente) {
        return this.webservice.post('cliente/save', JSON.stringify(cliente))
            .map(function () { return new alerta_1.Alerta('Cliente salvo com sucesso', 'sucesso'); });
    };
    ClienteService.prototype.listar = function (status) {
        var colaborador = JSON.parse(sessionStorage.getItem('colaborador'));
        var path = 'cliente/list/' + colaborador.empresa.codigo + '/';
        if (status == null)
            return this.webservice.get(path)
                .map(function (res) { return res.json(); });
        return this.webservice.get(path + status)
            .map(function (res) { return res.json(); });
    };
    ClienteService.prototype.buscar = function (codigo) {
        return this.webservice.get('cliente/get/' + codigo)
            .map(function (res) { return res.json(); });
    };
    return ClienteService;
}());
ClienteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [webservice_1.Webservice])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map
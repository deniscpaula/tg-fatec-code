"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var breadcrumb_module_1 = require("../breadcrumb/breadcrumb.module");
var alerta_module_1 = require("../alerta/alerta.module");
var cargo_component_1 = require("./cargo.component");
var cargo_service_1 = require("./cargo.service");
var lista_cargo_component_1 = require("./lista-cargo.component");
var titulo_module_1 = require("../titulo/titulo.module");
var CargoModule = (function () {
    function CargoModule() {
    }
    return CargoModule;
}());
CargoModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, titulo_module_1.TituloModule, breadcrumb_module_1.BreadcrumbModule, alerta_module_1.AlertaModule],
        exports: [],
        declarations: [cargo_component_1.CargoComponent, lista_cargo_component_1.ListaCargoComponent],
        providers: [cargo_service_1.CargoService],
    })
], CargoModule);
exports.CargoModule = CargoModule;
//# sourceMappingURL=cargo.module.js.map
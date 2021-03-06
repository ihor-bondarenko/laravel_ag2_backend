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
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var app_item_1 = require('./app.item');
var app_emitter_service_1 = require('./app.emitter.service');
var app_uuid_service_1 = require('./app.uuid.service');
var ItemBox = (function () {
    function ItemBox(itemService, uuid) {
        this.itemService = itemService;
        this.uuid = uuid;
    }
    ItemBox.prototype.editItem = function () {
        this.item.name = this.uuid.uuid();
        console.log('-- edited --');
        app_emitter_service_1.AppEmitterService.get(this.personEditId).emit(this.item);
    };
    ItemBox.prototype.ngOnChanges = function (changes) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', app_item_1.Item)
    ], ItemBox.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemBox.prototype, "personsListId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemBox.prototype, "personEditId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ItemBox.prototype, "getTableStructure", void 0);
    ItemBox = __decorate([
        core_1.Component({
            selector: 'item-box',
            template: "\n        <li>\n            {{item.id}} - {{item.name}}\n            <ul>\n                <li *ngFor=\"let subitem of item.columns\">\n                    {{ subitem.name }} [{{ subitem.type }}]\n                </li>\n            </ul>\n        </li>\n    ",
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, app_uuid_service_1.UUIDService])
    ], ItemBox);
    return ItemBox;
}());
exports.ItemBox = ItemBox;
//# sourceMappingURL=app.item-box.js.map
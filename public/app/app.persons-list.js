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
var AppPersonsList = (function () {
    function AppPersonsList(itemService, uuid) {
        this.itemService = itemService;
        this.uuid = uuid;
    }
    AppPersonsList.prototype.loadList = function () {
        var _this = this;
        this.itemService.getList().subscribe(function (comments) {
            _this.items = comments;
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    AppPersonsList.prototype.addNewItem = function () {
        var uuid = this.uuid.uuid();
        var item = new app_item_1.Item(uuid, 'Ihor' + uuid, '');
        this.items.push(new app_item_1.Item(uuid, 'Ihor' + uuid, ''));
        console.log('-- added --');
        app_emitter_service_1.AppEmitterService.get(this.personsListId).emit(item);
    };
    AppPersonsList.prototype.ngOnInit = function () {
        var _this = this;
        //this.loadList();
        app_emitter_service_1.AppEmitterService.get(this.getTableStructure).subscribe(function (item) { _this.loadList(); });
        //AppEmitterService.get(this.personEditId).subscribe((item:Item) => {console.log(item);});
    };
    AppPersonsList.prototype.ngOnChanges = function (changes) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppPersonsList.prototype, "personsListId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppPersonsList.prototype, "personEditId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppPersonsList.prototype, "getTableStructure", void 0);
    AppPersonsList = __decorate([
        core_1.Component({
            selector: 'persons-list',
            template: "\n        <ul>\n            <item-box [personsListId]=\"personsListId\" [personEditId]=\"personEditId\" [getTableStructure]=\"getTableStructure\" *ngFor=\"let item of items\" [item]=\"item\"></item-box>\n        </ul>\n  ",
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, app_uuid_service_1.UUIDService])
    ], AppPersonsList);
    return AppPersonsList;
}());
exports.AppPersonsList = AppPersonsList;
//# sourceMappingURL=app.persons-list.js.map
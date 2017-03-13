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
require('../assets/css/styles.css');
var _ = require('lodash');
var Projects = (function () {
    function Projects(title_project, _id, tasks) {
        if (_id === void 0) { _id = _.uniqueId('project_'); }
        if (tasks === void 0) { tasks = []; }
        this._id = _id;
        this.title = title_project;
        this.tasks = tasks;
    }
    return Projects;
}());
var TASKS = [
    {
        _id: 1,
        project_id: '1',
        title: 'Первая таска',
        completed: false,
        messages: [{
                _id: 1,
                task_id: 1,
                text: 'первое сообещине'
            },
            {
                _id: 2,
                task_id: 1,
                text: 'Второе сообещине'
            }]
    },
    {
        _id: 2,
        project_id: '1',
        title: 'Вторая таска',
        completed: false,
        messages: []
    },
    {
        _id: 3,
        project_id: '2',
        title: 'Третья таска',
        completed: false,
        messages: []
    },
    {
        _id: 4,
        project_id: '3',
        title: 'Четвертая таска',
        completed: false,
        messages: []
    }
];
var PROJECTS = [
    {
        _id: '1',
        title: 'Первый проект',
        tasks: []
    },
    {
        _id: '2',
        title: 'Второй проект',
        tasks: []
    },
    {
        _id: '3',
        title: 'Третий проект',
        tasks: []
    },
    {
        _id: '4',
        title: 'Четвертый проект',
        tasks: []
    },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Teamer';
        this.newProjectTitle = '';
        this.projects = PROJECTS;
        this.tasks = TASKS;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setupView();
    };
    AppComponent.prototype.addProject = function () {
        var project = new Projects(this.newProjectTitle);
        this.projects.push(project);
        this.newProjectTitle = '';
        console.log(project);
    };
    AppComponent.prototype.deleteProject = function (project) {
        var index = this.projects.indexOf(project);
        if (index > -1) {
            this.projects.splice(index, 1);
        }
    };
    AppComponent.prototype.getTasks = function (project) {
        return _.filter(this.tasks, { project_id: project._id });
    };
    AppComponent.prototype.deleteTask = function (ProjectTasks, task) {
        var index = ProjectTasks.indexOf(task);
        if (index > -1) {
            ProjectTasks.splice(index, 1);
        }
    };
    AppComponent.prototype.showTask = function (task) {
        //console.log(task);
    };
    AppComponent.prototype.setupView = function () {
        jQuery('main').sortable();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
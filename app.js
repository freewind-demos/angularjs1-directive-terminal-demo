const app = angular.module('app', [])

function helloDirective(name, priority, terminal) {
    return function () {
        return {
            priority: priority,
            terminal: terminal,
            link: function () {
                console.log('--------- ' + name + ' (priority: ' + priority + ', terminal: ' + terminal + ') ---------')
            }
        }
    }
}

app.directive('hello1', helloDirective('hello1', 1, false))
app.directive('hello2a', helloDirective('hello2', 2, true))
app.directive('hello2b', helloDirective('hello2b', 2, false))
app.directive('hello3', helloDirective('hello3', 3, false))

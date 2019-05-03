var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './App2019.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient } from '@microsoft/sp-http';
var App2019 = (function (_super) {
    __extends(App2019, _super);
    function App2019(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            url: '',
            title: ''
        };
        return _this;
    }
    App2019.prototype._getName = function () {
        var _this = this;
        var linkPage = this.props.context.pageContext.web.absoluteUrl;
        var restApi = linkPage + "/_api/web?$select=Title";
        this.setState({
            url: linkPage
        });
        this.props.context.spHttpClient.get(restApi, SPHttpClient.configurations.v1)
            .then(function (resp) { return resp.json(); })
            .then((function (web) {
            _this.setState({
                title: web.Title
            });
        }));
    };
    App2019.prototype.componentDidMount = function () {
        this._getName();
    };
    App2019.prototype.render = function () {
        return (React.createElement("div", { className: styles.app2019 },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to SharePoint!"),
                        React.createElement("p", { className: styles.subTitle }, "Customize SharePoint experiences using Web Parts."),
                        React.createElement("p", { className: styles.description },
                            " TITTLE PAGE :  ",
                            this.state.title),
                        React.createElement("p", { className: styles.description },
                            " LINK PAGE :  ",
                            this.state.url),
                        React.createElement("p", { className: styles.description }, escape(this.props.description)),
                        React.createElement("a", { href: 'https://aka.ms/spfx', className: styles.button },
                            React.createElement("span", { className: styles.label }, "Learn more")))))));
    };
    return App2019;
}(React.Component));
export default App2019;

//# sourceMappingURL=App2019.js.map

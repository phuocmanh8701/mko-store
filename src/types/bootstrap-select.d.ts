import "jquery";

declare module "jquery" {
    interface JQuery {
        selectpicker(
            action?: string,
            value?: string | number | boolean
        ): JQuery;
    }
}
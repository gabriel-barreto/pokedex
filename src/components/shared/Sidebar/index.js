const auxClass = "--is-open";
const sidebar = () => document.querySelector("#sidebar");

const status = () => {
    return sidebar().classList.contains(auxClass);
};

const hide = () => {
    sidebar().classList.remove(auxClass);
    return status();
};

const show = () => {
    sidebar().classList.add(auxClass);
    return status();
};

export default {
    show,
    hide,
    status
};

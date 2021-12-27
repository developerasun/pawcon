// increase value i to 100 
// reflect the i in html
// stop if i reaches 100
export const IncreaseToTarget = (param) => {
    if (param.count < param.target) {
        param.display.textContent = `${param.count}`;
        param.count++;
        setTimeout(() => { Wrapper(param); }, param.speed);
    }
};
const Wrapper = (param) => {
    IncreaseToTarget(param);
};

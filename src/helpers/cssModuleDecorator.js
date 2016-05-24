import css from 'react-css-modules';
export default function CSSModuleDecorator(...args) {
  return css(...args, {
    allowMultiple: true,
    errorWhenNotFound: false,
  });
}

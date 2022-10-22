const template = (variables, { tpl }) => {
  return tpl`
import { IconProps } from '../Icon.types'

${variables.interfaces};

const ${variables.componentName} = ({ size, color }: IconProps) => (
  ${variables.jsx}
);
 
${variables.exports};
`
}

module.exports = template

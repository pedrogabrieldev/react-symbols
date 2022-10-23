import IconLocalPizzaFill0Wght100Grad0Opsz48 from '../components/LocalPizzaFill0Wght100Grad0Opsz48'
import IconLocalPizzaFill0Wght200Grad0Opsz48 from '../components/LocalPizzaFill0Wght200Grad0Opsz48'
import IconLocalPizzaFill0Wght300Grad0Opsz48 from '../components/LocalPizzaFill0Wght300Grad0Opsz48'
import IconLocalPizzaFill0Wght400Grad0Opsz48 from '../components/LocalPizzaFill0Wght400Grad0Opsz48'
import IconLocalPizzaFill0Wght500Grad0Opsz48 from '../components/LocalPizzaFill0Wght500Grad0Opsz48'
import IconLocalPizzaFill0Wght600Grad0Opsz48 from '../components/LocalPizzaFill0Wght600Grad0Opsz48'
import IconLocalPizzaFill0Wght700Grad0Opsz48 from '../components/LocalPizzaFill0Wght700Grad0Opsz48'
import IconLocalPizzaFill1Wght100Grad0Opsz48 from '../components/LocalPizzaFill1Wght100Grad0Opsz48'
import IconLocalPizzaFill1Wght200Grad0Opsz48 from '../components/LocalPizzaFill1Wght200Grad0Opsz48'
import IconLocalPizzaFill1Wght300Grad0Opsz48 from '../components/LocalPizzaFill1Wght300Grad0Opsz48'
import IconLocalPizzaFill1Wght400Grad0Opsz48 from '../components/LocalPizzaFill1Wght400Grad0Opsz48'
import IconLocalPizzaFill1Wght500Grad0Opsz48 from '../components/LocalPizzaFill1Wght500Grad0Opsz48'
import IconLocalPizzaFill1Wght600Grad0Opsz48 from '../components/LocalPizzaFill1Wght600Grad0Opsz48'
import IconLocalPizzaFill1Wght700Grad0Opsz48 from '../components/LocalPizzaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalPizza = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalPizzaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalPizzaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalPizzaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalPizzaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalPizzaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalPizzaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalPizzaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalPizzaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalPizzaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalPizzaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalPizzaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalPizzaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalPizzaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalPizzaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

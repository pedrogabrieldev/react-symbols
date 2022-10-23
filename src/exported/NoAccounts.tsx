import IconNoAccountsFill0Wght100Grad0Opsz48 from '../components/NoAccountsFill0Wght100Grad0Opsz48'
import IconNoAccountsFill0Wght200Grad0Opsz48 from '../components/NoAccountsFill0Wght200Grad0Opsz48'
import IconNoAccountsFill0Wght300Grad0Opsz48 from '../components/NoAccountsFill0Wght300Grad0Opsz48'
import IconNoAccountsFill0Wght400Grad0Opsz48 from '../components/NoAccountsFill0Wght400Grad0Opsz48'
import IconNoAccountsFill0Wght500Grad0Opsz48 from '../components/NoAccountsFill0Wght500Grad0Opsz48'
import IconNoAccountsFill0Wght600Grad0Opsz48 from '../components/NoAccountsFill0Wght600Grad0Opsz48'
import IconNoAccountsFill0Wght700Grad0Opsz48 from '../components/NoAccountsFill0Wght700Grad0Opsz48'
import IconNoAccountsFill1Wght100Grad0Opsz48 from '../components/NoAccountsFill1Wght100Grad0Opsz48'
import IconNoAccountsFill1Wght200Grad0Opsz48 from '../components/NoAccountsFill1Wght200Grad0Opsz48'
import IconNoAccountsFill1Wght300Grad0Opsz48 from '../components/NoAccountsFill1Wght300Grad0Opsz48'
import IconNoAccountsFill1Wght400Grad0Opsz48 from '../components/NoAccountsFill1Wght400Grad0Opsz48'
import IconNoAccountsFill1Wght500Grad0Opsz48 from '../components/NoAccountsFill1Wght500Grad0Opsz48'
import IconNoAccountsFill1Wght600Grad0Opsz48 from '../components/NoAccountsFill1Wght600Grad0Opsz48'
import IconNoAccountsFill1Wght700Grad0Opsz48 from '../components/NoAccountsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoAccounts = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoAccountsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoAccountsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoAccountsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoAccountsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoAccountsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoAccountsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoAccountsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoAccountsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoAccountsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoAccountsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoAccountsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoAccountsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoAccountsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoAccountsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

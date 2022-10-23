import IconViewCompactFill0Wght100Grad0Opsz48 from '../components/ViewCompactFill0Wght100Grad0Opsz48'
import IconViewCompactFill0Wght200Grad0Opsz48 from '../components/ViewCompactFill0Wght200Grad0Opsz48'
import IconViewCompactFill0Wght300Grad0Opsz48 from '../components/ViewCompactFill0Wght300Grad0Opsz48'
import IconViewCompactFill0Wght400Grad0Opsz48 from '../components/ViewCompactFill0Wght400Grad0Opsz48'
import IconViewCompactFill0Wght500Grad0Opsz48 from '../components/ViewCompactFill0Wght500Grad0Opsz48'
import IconViewCompactFill0Wght600Grad0Opsz48 from '../components/ViewCompactFill0Wght600Grad0Opsz48'
import IconViewCompactFill0Wght700Grad0Opsz48 from '../components/ViewCompactFill0Wght700Grad0Opsz48'
import IconViewCompactFill1Wght100Grad0Opsz48 from '../components/ViewCompactFill1Wght100Grad0Opsz48'
import IconViewCompactFill1Wght200Grad0Opsz48 from '../components/ViewCompactFill1Wght200Grad0Opsz48'
import IconViewCompactFill1Wght300Grad0Opsz48 from '../components/ViewCompactFill1Wght300Grad0Opsz48'
import IconViewCompactFill1Wght400Grad0Opsz48 from '../components/ViewCompactFill1Wght400Grad0Opsz48'
import IconViewCompactFill1Wght500Grad0Opsz48 from '../components/ViewCompactFill1Wght500Grad0Opsz48'
import IconViewCompactFill1Wght600Grad0Opsz48 from '../components/ViewCompactFill1Wght600Grad0Opsz48'
import IconViewCompactFill1Wght700Grad0Opsz48 from '../components/ViewCompactFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewCompact = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewCompactFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewCompactFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewCompactFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewCompactFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewCompactFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewCompactFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewCompactFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewCompactFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewCompactFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewCompactFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewCompactFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewCompactFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewCompactFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewCompactFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

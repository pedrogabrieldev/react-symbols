import IconProductivityFill0Wght100Grad0Opsz48 from '../components/ProductivityFill0Wght100Grad0Opsz48'
import IconProductivityFill0Wght200Grad0Opsz48 from '../components/ProductivityFill0Wght200Grad0Opsz48'
import IconProductivityFill0Wght300Grad0Opsz48 from '../components/ProductivityFill0Wght300Grad0Opsz48'
import IconProductivityFill0Wght400Grad0Opsz48 from '../components/ProductivityFill0Wght400Grad0Opsz48'
import IconProductivityFill0Wght500Grad0Opsz48 from '../components/ProductivityFill0Wght500Grad0Opsz48'
import IconProductivityFill0Wght600Grad0Opsz48 from '../components/ProductivityFill0Wght600Grad0Opsz48'
import IconProductivityFill0Wght700Grad0Opsz48 from '../components/ProductivityFill0Wght700Grad0Opsz48'
import IconProductivityFill1Wght100Grad0Opsz48 from '../components/ProductivityFill1Wght100Grad0Opsz48'
import IconProductivityFill1Wght200Grad0Opsz48 from '../components/ProductivityFill1Wght200Grad0Opsz48'
import IconProductivityFill1Wght300Grad0Opsz48 from '../components/ProductivityFill1Wght300Grad0Opsz48'
import IconProductivityFill1Wght400Grad0Opsz48 from '../components/ProductivityFill1Wght400Grad0Opsz48'
import IconProductivityFill1Wght500Grad0Opsz48 from '../components/ProductivityFill1Wght500Grad0Opsz48'
import IconProductivityFill1Wght600Grad0Opsz48 from '../components/ProductivityFill1Wght600Grad0Opsz48'
import IconProductivityFill1Wght700Grad0Opsz48 from '../components/ProductivityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconProductivity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconProductivityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconProductivityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconProductivityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconProductivityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconProductivityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconProductivityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconProductivityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconProductivityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconProductivityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconProductivityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconProductivityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconProductivityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconProductivityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconProductivityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

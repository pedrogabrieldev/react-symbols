import IconGridGoldenratioFill0Wght100Grad0Opsz48 from '../components/GridGoldenratioFill0Wght100Grad0Opsz48'
import IconGridGoldenratioFill0Wght200Grad0Opsz48 from '../components/GridGoldenratioFill0Wght200Grad0Opsz48'
import IconGridGoldenratioFill0Wght300Grad0Opsz48 from '../components/GridGoldenratioFill0Wght300Grad0Opsz48'
import IconGridGoldenratioFill0Wght400Grad0Opsz48 from '../components/GridGoldenratioFill0Wght400Grad0Opsz48'
import IconGridGoldenratioFill0Wght500Grad0Opsz48 from '../components/GridGoldenratioFill0Wght500Grad0Opsz48'
import IconGridGoldenratioFill0Wght600Grad0Opsz48 from '../components/GridGoldenratioFill0Wght600Grad0Opsz48'
import IconGridGoldenratioFill0Wght700Grad0Opsz48 from '../components/GridGoldenratioFill0Wght700Grad0Opsz48'
import IconGridGoldenratioFill1Wght100Grad0Opsz48 from '../components/GridGoldenratioFill1Wght100Grad0Opsz48'
import IconGridGoldenratioFill1Wght200Grad0Opsz48 from '../components/GridGoldenratioFill1Wght200Grad0Opsz48'
import IconGridGoldenratioFill1Wght300Grad0Opsz48 from '../components/GridGoldenratioFill1Wght300Grad0Opsz48'
import IconGridGoldenratioFill1Wght400Grad0Opsz48 from '../components/GridGoldenratioFill1Wght400Grad0Opsz48'
import IconGridGoldenratioFill1Wght500Grad0Opsz48 from '../components/GridGoldenratioFill1Wght500Grad0Opsz48'
import IconGridGoldenratioFill1Wght600Grad0Opsz48 from '../components/GridGoldenratioFill1Wght600Grad0Opsz48'
import IconGridGoldenratioFill1Wght700Grad0Opsz48 from '../components/GridGoldenratioFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGridGoldenratio = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGridGoldenratioFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGridGoldenratioFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGridGoldenratioFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGridGoldenratioFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGridGoldenratioFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGridGoldenratioFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGridGoldenratioFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGridGoldenratioFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGridGoldenratioFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGridGoldenratioFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGridGoldenratioFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGridGoldenratioFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGridGoldenratioFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGridGoldenratioFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

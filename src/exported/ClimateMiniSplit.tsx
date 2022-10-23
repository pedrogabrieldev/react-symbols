import IconClimateMiniSplitFill0Wght100Grad0Opsz48 from '../components/ClimateMiniSplitFill0Wght100Grad0Opsz48'
import IconClimateMiniSplitFill0Wght200Grad0Opsz48 from '../components/ClimateMiniSplitFill0Wght200Grad0Opsz48'
import IconClimateMiniSplitFill0Wght300Grad0Opsz48 from '../components/ClimateMiniSplitFill0Wght300Grad0Opsz48'
import IconClimateMiniSplitFill0Wght400Grad0Opsz48 from '../components/ClimateMiniSplitFill0Wght400Grad0Opsz48'
import IconClimateMiniSplitFill0Wght500Grad0Opsz48 from '../components/ClimateMiniSplitFill0Wght500Grad0Opsz48'
import IconClimateMiniSplitFill0Wght600Grad0Opsz48 from '../components/ClimateMiniSplitFill0Wght600Grad0Opsz48'
import IconClimateMiniSplitFill0Wght700Grad0Opsz48 from '../components/ClimateMiniSplitFill0Wght700Grad0Opsz48'
import IconClimateMiniSplitFill1Wght100Grad0Opsz48 from '../components/ClimateMiniSplitFill1Wght100Grad0Opsz48'
import IconClimateMiniSplitFill1Wght200Grad0Opsz48 from '../components/ClimateMiniSplitFill1Wght200Grad0Opsz48'
import IconClimateMiniSplitFill1Wght300Grad0Opsz48 from '../components/ClimateMiniSplitFill1Wght300Grad0Opsz48'
import IconClimateMiniSplitFill1Wght400Grad0Opsz48 from '../components/ClimateMiniSplitFill1Wght400Grad0Opsz48'
import IconClimateMiniSplitFill1Wght500Grad0Opsz48 from '../components/ClimateMiniSplitFill1Wght500Grad0Opsz48'
import IconClimateMiniSplitFill1Wght600Grad0Opsz48 from '../components/ClimateMiniSplitFill1Wght600Grad0Opsz48'
import IconClimateMiniSplitFill1Wght700Grad0Opsz48 from '../components/ClimateMiniSplitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconClimateMiniSplit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconClimateMiniSplitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconClimateMiniSplitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconClimateMiniSplitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconClimateMiniSplitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconClimateMiniSplitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconClimateMiniSplitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconClimateMiniSplitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconClimateMiniSplitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconClimateMiniSplitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconClimateMiniSplitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconClimateMiniSplitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconClimateMiniSplitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconClimateMiniSplitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconClimateMiniSplitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

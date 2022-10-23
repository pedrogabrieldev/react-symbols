import IconDataExplorationFill0Wght100Grad0Opsz48 from '../components/DataExplorationFill0Wght100Grad0Opsz48'
import IconDataExplorationFill0Wght200Grad0Opsz48 from '../components/DataExplorationFill0Wght200Grad0Opsz48'
import IconDataExplorationFill0Wght300Grad0Opsz48 from '../components/DataExplorationFill0Wght300Grad0Opsz48'
import IconDataExplorationFill0Wght400Grad0Opsz48 from '../components/DataExplorationFill0Wght400Grad0Opsz48'
import IconDataExplorationFill0Wght500Grad0Opsz48 from '../components/DataExplorationFill0Wght500Grad0Opsz48'
import IconDataExplorationFill0Wght600Grad0Opsz48 from '../components/DataExplorationFill0Wght600Grad0Opsz48'
import IconDataExplorationFill0Wght700Grad0Opsz48 from '../components/DataExplorationFill0Wght700Grad0Opsz48'
import IconDataExplorationFill1Wght100Grad0Opsz48 from '../components/DataExplorationFill1Wght100Grad0Opsz48'
import IconDataExplorationFill1Wght200Grad0Opsz48 from '../components/DataExplorationFill1Wght200Grad0Opsz48'
import IconDataExplorationFill1Wght300Grad0Opsz48 from '../components/DataExplorationFill1Wght300Grad0Opsz48'
import IconDataExplorationFill1Wght400Grad0Opsz48 from '../components/DataExplorationFill1Wght400Grad0Opsz48'
import IconDataExplorationFill1Wght500Grad0Opsz48 from '../components/DataExplorationFill1Wght500Grad0Opsz48'
import IconDataExplorationFill1Wght600Grad0Opsz48 from '../components/DataExplorationFill1Wght600Grad0Opsz48'
import IconDataExplorationFill1Wght700Grad0Opsz48 from '../components/DataExplorationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDataExploration = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDataExplorationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDataExplorationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDataExplorationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDataExplorationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDataExplorationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDataExplorationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDataExplorationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDataExplorationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDataExplorationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDataExplorationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDataExplorationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDataExplorationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDataExplorationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDataExplorationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

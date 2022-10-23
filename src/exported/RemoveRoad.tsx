import IconRemoveRoadFill0Wght100Grad0Opsz48 from '../components/RemoveRoadFill0Wght100Grad0Opsz48'
import IconRemoveRoadFill0Wght200Grad0Opsz48 from '../components/RemoveRoadFill0Wght200Grad0Opsz48'
import IconRemoveRoadFill0Wght300Grad0Opsz48 from '../components/RemoveRoadFill0Wght300Grad0Opsz48'
import IconRemoveRoadFill0Wght400Grad0Opsz48 from '../components/RemoveRoadFill0Wght400Grad0Opsz48'
import IconRemoveRoadFill0Wght500Grad0Opsz48 from '../components/RemoveRoadFill0Wght500Grad0Opsz48'
import IconRemoveRoadFill0Wght600Grad0Opsz48 from '../components/RemoveRoadFill0Wght600Grad0Opsz48'
import IconRemoveRoadFill0Wght700Grad0Opsz48 from '../components/RemoveRoadFill0Wght700Grad0Opsz48'
import IconRemoveRoadFill1Wght100Grad0Opsz48 from '../components/RemoveRoadFill1Wght100Grad0Opsz48'
import IconRemoveRoadFill1Wght200Grad0Opsz48 from '../components/RemoveRoadFill1Wght200Grad0Opsz48'
import IconRemoveRoadFill1Wght300Grad0Opsz48 from '../components/RemoveRoadFill1Wght300Grad0Opsz48'
import IconRemoveRoadFill1Wght400Grad0Opsz48 from '../components/RemoveRoadFill1Wght400Grad0Opsz48'
import IconRemoveRoadFill1Wght500Grad0Opsz48 from '../components/RemoveRoadFill1Wght500Grad0Opsz48'
import IconRemoveRoadFill1Wght600Grad0Opsz48 from '../components/RemoveRoadFill1Wght600Grad0Opsz48'
import IconRemoveRoadFill1Wght700Grad0Opsz48 from '../components/RemoveRoadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRemoveRoad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRemoveRoadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRemoveRoadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRemoveRoadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRemoveRoadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRemoveRoadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRemoveRoadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRemoveRoadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRemoveRoadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRemoveRoadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRemoveRoadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRemoveRoadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRemoveRoadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRemoveRoadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRemoveRoadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

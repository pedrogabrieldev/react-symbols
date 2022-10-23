import IconSceneFill0Wght100Grad0Opsz48 from '../components/SceneFill0Wght100Grad0Opsz48'
import IconSceneFill0Wght200Grad0Opsz48 from '../components/SceneFill0Wght200Grad0Opsz48'
import IconSceneFill0Wght300Grad0Opsz48 from '../components/SceneFill0Wght300Grad0Opsz48'
import IconSceneFill0Wght400Grad0Opsz48 from '../components/SceneFill0Wght400Grad0Opsz48'
import IconSceneFill0Wght500Grad0Opsz48 from '../components/SceneFill0Wght500Grad0Opsz48'
import IconSceneFill0Wght600Grad0Opsz48 from '../components/SceneFill0Wght600Grad0Opsz48'
import IconSceneFill0Wght700Grad0Opsz48 from '../components/SceneFill0Wght700Grad0Opsz48'
import IconSceneFill1Wght100Grad0Opsz48 from '../components/SceneFill1Wght100Grad0Opsz48'
import IconSceneFill1Wght200Grad0Opsz48 from '../components/SceneFill1Wght200Grad0Opsz48'
import IconSceneFill1Wght300Grad0Opsz48 from '../components/SceneFill1Wght300Grad0Opsz48'
import IconSceneFill1Wght400Grad0Opsz48 from '../components/SceneFill1Wght400Grad0Opsz48'
import IconSceneFill1Wght500Grad0Opsz48 from '../components/SceneFill1Wght500Grad0Opsz48'
import IconSceneFill1Wght600Grad0Opsz48 from '../components/SceneFill1Wght600Grad0Opsz48'
import IconSceneFill1Wght700Grad0Opsz48 from '../components/SceneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScene = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSceneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSceneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSceneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSceneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSceneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSceneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSceneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSceneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSceneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSceneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSceneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSceneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSceneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSceneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

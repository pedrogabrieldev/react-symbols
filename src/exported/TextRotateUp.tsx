import IconTextRotateUpFill0Wght100Grad0Opsz48 from '../components/TextRotateUpFill0Wght100Grad0Opsz48'
import IconTextRotateUpFill0Wght200Grad0Opsz48 from '../components/TextRotateUpFill0Wght200Grad0Opsz48'
import IconTextRotateUpFill0Wght300Grad0Opsz48 from '../components/TextRotateUpFill0Wght300Grad0Opsz48'
import IconTextRotateUpFill0Wght400Grad0Opsz48 from '../components/TextRotateUpFill0Wght400Grad0Opsz48'
import IconTextRotateUpFill0Wght500Grad0Opsz48 from '../components/TextRotateUpFill0Wght500Grad0Opsz48'
import IconTextRotateUpFill0Wght600Grad0Opsz48 from '../components/TextRotateUpFill0Wght600Grad0Opsz48'
import IconTextRotateUpFill0Wght700Grad0Opsz48 from '../components/TextRotateUpFill0Wght700Grad0Opsz48'
import IconTextRotateUpFill1Wght100Grad0Opsz48 from '../components/TextRotateUpFill1Wght100Grad0Opsz48'
import IconTextRotateUpFill1Wght200Grad0Opsz48 from '../components/TextRotateUpFill1Wght200Grad0Opsz48'
import IconTextRotateUpFill1Wght300Grad0Opsz48 from '../components/TextRotateUpFill1Wght300Grad0Opsz48'
import IconTextRotateUpFill1Wght400Grad0Opsz48 from '../components/TextRotateUpFill1Wght400Grad0Opsz48'
import IconTextRotateUpFill1Wght500Grad0Opsz48 from '../components/TextRotateUpFill1Wght500Grad0Opsz48'
import IconTextRotateUpFill1Wght600Grad0Opsz48 from '../components/TextRotateUpFill1Wght600Grad0Opsz48'
import IconTextRotateUpFill1Wght700Grad0Opsz48 from '../components/TextRotateUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextRotateUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextRotateUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextRotateUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextRotateUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextRotateUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextRotateUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextRotateUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextRotateUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextRotateUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextRotateUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextRotateUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextRotateUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextRotateUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextRotateUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextRotateUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

import IconViewTimelineFill0Wght100Grad0Opsz48 from '../components/ViewTimelineFill0Wght100Grad0Opsz48'
import IconViewTimelineFill0Wght200Grad0Opsz48 from '../components/ViewTimelineFill0Wght200Grad0Opsz48'
import IconViewTimelineFill0Wght300Grad0Opsz48 from '../components/ViewTimelineFill0Wght300Grad0Opsz48'
import IconViewTimelineFill0Wght400Grad0Opsz48 from '../components/ViewTimelineFill0Wght400Grad0Opsz48'
import IconViewTimelineFill0Wght500Grad0Opsz48 from '../components/ViewTimelineFill0Wght500Grad0Opsz48'
import IconViewTimelineFill0Wght600Grad0Opsz48 from '../components/ViewTimelineFill0Wght600Grad0Opsz48'
import IconViewTimelineFill0Wght700Grad0Opsz48 from '../components/ViewTimelineFill0Wght700Grad0Opsz48'
import IconViewTimelineFill1Wght100Grad0Opsz48 from '../components/ViewTimelineFill1Wght100Grad0Opsz48'
import IconViewTimelineFill1Wght200Grad0Opsz48 from '../components/ViewTimelineFill1Wght200Grad0Opsz48'
import IconViewTimelineFill1Wght300Grad0Opsz48 from '../components/ViewTimelineFill1Wght300Grad0Opsz48'
import IconViewTimelineFill1Wght400Grad0Opsz48 from '../components/ViewTimelineFill1Wght400Grad0Opsz48'
import IconViewTimelineFill1Wght500Grad0Opsz48 from '../components/ViewTimelineFill1Wght500Grad0Opsz48'
import IconViewTimelineFill1Wght600Grad0Opsz48 from '../components/ViewTimelineFill1Wght600Grad0Opsz48'
import IconViewTimelineFill1Wght700Grad0Opsz48 from '../components/ViewTimelineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewTimeline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewTimelineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewTimelineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewTimelineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewTimelineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewTimelineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewTimelineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewTimelineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewTimelineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewTimelineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewTimelineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewTimelineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewTimelineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewTimelineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewTimelineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

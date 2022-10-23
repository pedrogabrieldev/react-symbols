import IconStayPrimaryLandscapeFill0Wght100Grad0Opsz48 from '../components/StayPrimaryLandscapeFill0Wght100Grad0Opsz48'
import IconStayPrimaryLandscapeFill0Wght200Grad0Opsz48 from '../components/StayPrimaryLandscapeFill0Wght200Grad0Opsz48'
import IconStayPrimaryLandscapeFill0Wght300Grad0Opsz48 from '../components/StayPrimaryLandscapeFill0Wght300Grad0Opsz48'
import IconStayPrimaryLandscapeFill0Wght400Grad0Opsz48 from '../components/StayPrimaryLandscapeFill0Wght400Grad0Opsz48'
import IconStayPrimaryLandscapeFill0Wght500Grad0Opsz48 from '../components/StayPrimaryLandscapeFill0Wght500Grad0Opsz48'
import IconStayPrimaryLandscapeFill0Wght600Grad0Opsz48 from '../components/StayPrimaryLandscapeFill0Wght600Grad0Opsz48'
import IconStayPrimaryLandscapeFill0Wght700Grad0Opsz48 from '../components/StayPrimaryLandscapeFill0Wght700Grad0Opsz48'
import IconStayPrimaryLandscapeFill1Wght100Grad0Opsz48 from '../components/StayPrimaryLandscapeFill1Wght100Grad0Opsz48'
import IconStayPrimaryLandscapeFill1Wght200Grad0Opsz48 from '../components/StayPrimaryLandscapeFill1Wght200Grad0Opsz48'
import IconStayPrimaryLandscapeFill1Wght300Grad0Opsz48 from '../components/StayPrimaryLandscapeFill1Wght300Grad0Opsz48'
import IconStayPrimaryLandscapeFill1Wght400Grad0Opsz48 from '../components/StayPrimaryLandscapeFill1Wght400Grad0Opsz48'
import IconStayPrimaryLandscapeFill1Wght500Grad0Opsz48 from '../components/StayPrimaryLandscapeFill1Wght500Grad0Opsz48'
import IconStayPrimaryLandscapeFill1Wght600Grad0Opsz48 from '../components/StayPrimaryLandscapeFill1Wght600Grad0Opsz48'
import IconStayPrimaryLandscapeFill1Wght700Grad0Opsz48 from '../components/StayPrimaryLandscapeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStayPrimaryLandscape = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStayPrimaryLandscapeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStayPrimaryLandscapeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStayPrimaryLandscapeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStayPrimaryLandscapeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStayPrimaryLandscapeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStayPrimaryLandscapeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStayPrimaryLandscapeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStayPrimaryLandscapeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStayPrimaryLandscapeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStayPrimaryLandscapeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStayPrimaryLandscapeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStayPrimaryLandscapeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStayPrimaryLandscapeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStayPrimaryLandscapeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

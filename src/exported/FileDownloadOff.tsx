import IconFileDownloadOffFill0Wght100Grad0Opsz48 from '../components/FileDownloadOffFill0Wght100Grad0Opsz48'
import IconFileDownloadOffFill0Wght200Grad0Opsz48 from '../components/FileDownloadOffFill0Wght200Grad0Opsz48'
import IconFileDownloadOffFill0Wght300Grad0Opsz48 from '../components/FileDownloadOffFill0Wght300Grad0Opsz48'
import IconFileDownloadOffFill0Wght400Grad0Opsz48 from '../components/FileDownloadOffFill0Wght400Grad0Opsz48'
import IconFileDownloadOffFill0Wght500Grad0Opsz48 from '../components/FileDownloadOffFill0Wght500Grad0Opsz48'
import IconFileDownloadOffFill0Wght600Grad0Opsz48 from '../components/FileDownloadOffFill0Wght600Grad0Opsz48'
import IconFileDownloadOffFill0Wght700Grad0Opsz48 from '../components/FileDownloadOffFill0Wght700Grad0Opsz48'
import IconFileDownloadOffFill1Wght100Grad0Opsz48 from '../components/FileDownloadOffFill1Wght100Grad0Opsz48'
import IconFileDownloadOffFill1Wght200Grad0Opsz48 from '../components/FileDownloadOffFill1Wght200Grad0Opsz48'
import IconFileDownloadOffFill1Wght300Grad0Opsz48 from '../components/FileDownloadOffFill1Wght300Grad0Opsz48'
import IconFileDownloadOffFill1Wght400Grad0Opsz48 from '../components/FileDownloadOffFill1Wght400Grad0Opsz48'
import IconFileDownloadOffFill1Wght500Grad0Opsz48 from '../components/FileDownloadOffFill1Wght500Grad0Opsz48'
import IconFileDownloadOffFill1Wght600Grad0Opsz48 from '../components/FileDownloadOffFill1Wght600Grad0Opsz48'
import IconFileDownloadOffFill1Wght700Grad0Opsz48 from '../components/FileDownloadOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFileDownloadOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFileDownloadOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFileDownloadOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFileDownloadOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFileDownloadOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFileDownloadOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFileDownloadOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFileDownloadOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFileDownloadOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFileDownloadOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFileDownloadOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFileDownloadOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFileDownloadOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFileDownloadOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFileDownloadOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

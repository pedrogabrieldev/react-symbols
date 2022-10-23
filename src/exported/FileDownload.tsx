import IconFileDownloadFill0Wght100Grad0Opsz48 from '../components/FileDownloadFill0Wght100Grad0Opsz48'
import IconFileDownloadFill0Wght200Grad0Opsz48 from '../components/FileDownloadFill0Wght200Grad0Opsz48'
import IconFileDownloadFill0Wght300Grad0Opsz48 from '../components/FileDownloadFill0Wght300Grad0Opsz48'
import IconFileDownloadFill0Wght400Grad0Opsz48 from '../components/FileDownloadFill0Wght400Grad0Opsz48'
import IconFileDownloadFill0Wght500Grad0Opsz48 from '../components/FileDownloadFill0Wght500Grad0Opsz48'
import IconFileDownloadFill0Wght600Grad0Opsz48 from '../components/FileDownloadFill0Wght600Grad0Opsz48'
import IconFileDownloadFill0Wght700Grad0Opsz48 from '../components/FileDownloadFill0Wght700Grad0Opsz48'
import IconFileDownloadFill1Wght100Grad0Opsz48 from '../components/FileDownloadFill1Wght100Grad0Opsz48'
import IconFileDownloadFill1Wght200Grad0Opsz48 from '../components/FileDownloadFill1Wght200Grad0Opsz48'
import IconFileDownloadFill1Wght300Grad0Opsz48 from '../components/FileDownloadFill1Wght300Grad0Opsz48'
import IconFileDownloadFill1Wght400Grad0Opsz48 from '../components/FileDownloadFill1Wght400Grad0Opsz48'
import IconFileDownloadFill1Wght500Grad0Opsz48 from '../components/FileDownloadFill1Wght500Grad0Opsz48'
import IconFileDownloadFill1Wght600Grad0Opsz48 from '../components/FileDownloadFill1Wght600Grad0Opsz48'
import IconFileDownloadFill1Wght700Grad0Opsz48 from '../components/FileDownloadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFileDownload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFileDownloadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFileDownloadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFileDownloadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFileDownloadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFileDownloadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFileDownloadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFileDownloadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFileDownloadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFileDownloadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFileDownloadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFileDownloadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFileDownloadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFileDownloadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFileDownloadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
